import style from "@styles/CheckOrders.module.scss";
import Image from "next/image";
import arrow from "@assets/icons/arrow-left.svg"
import Link from "next/link";
const CheckOrders = () => {
  return (
    <div className={style["superCont"]}>
      <div className={style["check_cont"]}>
        <div className="title_container me-3 d-flex align-items-center">
            <Link href="/">
                <Image src={arrow} alt="arrow" className={style["arrow"]}/>
            </Link>
            <h3>My Order</h3>
        </div>
        <hr/>
        <div className={style["order_field"]}>
            <span>
                <p className="m-0 fw-bold">16-05-2023</p>
                <p className="m-0">0 Items</p>
            </span>
            <h5>$0.00</h5>
        </div>
        <button className={style["primary-button"]}>PAY</button>
      </div>
    </div>
  );
};

export default CheckOrders;