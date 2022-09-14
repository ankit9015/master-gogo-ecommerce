import { useToast } from "../context";

const loadScript = async (url) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = url;

    script.onload = () => {
      resolve(true);
    };

    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });
};

function usePayment(price, user, handler) {
  const { addToast } = useToast();
  async function showRazorPay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      addToast({ content: "Oops something went wrong!", type: "ERROR" });
      return;
    }

    const options = {
      key: "rzp_test_UJLlgtXgtO0Px1",
      amount: price * 100,
      currency: "INR",
      name: "Master-GoGo Clothing Store",
      description: "Place your order now",
      image: "/android-chrome-512x512.png",
      handler: (res) => {
        console.log(res);
        handler(res);
      },
      prefill: {
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        contact: user.phone,
      },
      theme: {
        color: "#008190",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    paymentObject.on("payment.failed", (response) => {
      console.log(response);
      addToast({ content: "Payment Failed", type: "ERROR" });
    });
  }

  return showRazorPay;
}
export default usePayment;
