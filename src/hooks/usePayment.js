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
      image:
        "https://w7.pngwing.com/pngs/426/341/png-transparent-shopping-cart-e-commerce-online-shopping-logo-shopping-cart-blue-service-logo.png",
      handler,
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
  }

  return showRazorPay;
}
export default usePayment;
