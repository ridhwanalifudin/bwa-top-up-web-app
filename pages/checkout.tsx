import Image from "next/image";
import CheckoutItem from "../components/molecules/CheckoutItem";
import CheckoutConfirmation from "../components/organisms/CheckoutConfirmation";
import CheckoutDetail from "../components/organisms/CheckoutDetail";

export default function Checkout() {
  return (
    <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
      <div className="container-fluid">
        <div className="logo text-md-center text-start pb-50">
          <a className="" href="#">
            <Image src="/icon/logo.svg" width={60} height={60} alt="logo" />
          </a>
        </div>
      
        <CheckoutItem />
        <hr/>
        <CheckoutDetail />
        <CheckoutConfirmation />
      </div>
    </section>
  );
}
