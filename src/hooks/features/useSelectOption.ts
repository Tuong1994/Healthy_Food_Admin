import { EGender, ERole } from "@/services/customer/enum";
import { EInventoryStatus, EProductOrigin, EProductStatus, EProductUnit } from "@/services/product/enum";
import { EOrderStatus, EPaymentMethod, EPaymentStatus, EReceivedType } from "@/services/order/enum";
import { ESort } from "@/common/enum";
import type { SelectOptions } from "@/components/Control/type";
import useLang from "./useLang";

const useSelectOption = () => {
  const { lang } = useLang();

  const sortBy: SelectOptions = [
    { label: lang.options.sortBy.newest, value: ESort.NEWEST },
    { label: lang.options.sortBy.oldest, value: ESort.OLDEST },
  ];

  const gender: SelectOptions = [
    { label: lang.options.gender.male, value: EGender.MALE },
    { label: lang.options.gender.female, value: EGender.FEMALE },
  ];

  const role: SelectOptions = [
    { label: lang.options.role.superAdmin, value: ERole.SUPER_ADMIN },
    { label: lang.options.role.admin, value: ERole.ADMIN },
    { label: lang.options.role.customer, value: ERole.CUSTOMER },
  ];

  const unit: SelectOptions = [
    { label: lang.options.productUnit.kg, value: EProductUnit.KG },
    { label: lang.options.productUnit.pack, value: EProductUnit.PACK },
    { label: lang.options.productUnit.piece, value: EProductUnit.PIECE },
    { label: lang.options.productUnit.bin, value: EProductUnit.BIN },
    { label: lang.options.productUnit.bottle, value: EProductUnit.BOTTLE },
    { label: lang.options.productUnit.box, value: EProductUnit.BOX },
    { label: lang.options.productUnit.can, value: EProductUnit.CAN },
  ];

  const productStatus: SelectOptions = [
    { label: lang.options.productStatus.all, value: EProductStatus.ALL },
    { label: lang.options.productStatus.draft, value: EProductStatus.DRAFT },
    { label: lang.options.productStatus.active, value: EProductStatus.ACTIVE },
  ];

  const origin: SelectOptions = [{ label: lang.options.productOrigin.vn, value: EProductOrigin.VN }];

  const inventoryStatus: SelectOptions = [
    { label: lang.options.inventoryStatus.inStock, value: EInventoryStatus.IN_STOCK },
    { label: lang.options.inventoryStatus.outOfStock, value: EInventoryStatus.OUT_OF_STOCK },
  ];

  const supplier: SelectOptions = [{ label: "Healthy Food", value: "Healthy Food" }];

  const profit: SelectOptions = [
    { label: "25%", value: 25 },
    { label: "50%", value: 50 },
    { label: "75%", value: 75 },
    { label: "100%", value: 100 },
  ];

  const orderStatus: SelectOptions = [
    { label: lang.options.orderStatus.waitting, value: EOrderStatus.WAITTING },
    { label: lang.options.orderStatus.delivered, value: EOrderStatus.DELIVERED },
    { label: lang.options.orderStatus.delivering, value: EOrderStatus.DELIVERING },
  ];

  const paymentStatus: SelectOptions = [
    { label: lang.options.paymentStatus.unPaid, value: EPaymentStatus.UNPAID },
    { label: lang.options.paymentStatus.paid, value: EPaymentStatus.PAID },
  ];

  const paymentMethod: SelectOptions = [
    { label: lang.options.paymentMethod.transfer, value: EPaymentMethod.TRANSFER },
    { label: lang.options.paymentMethod.cod, value: EPaymentMethod.COD },
    { label: lang.options.paymentMethod.cash, value: EPaymentMethod.CASH },
  ];

  const receivedType: SelectOptions = [
    { label: lang.order.form.received.store, value: EReceivedType.STORE },
    { label: lang.order.form.received.delivery, value: EReceivedType.DELIVERY },
  ];

  return {
    sortBy,
    gender,
    role,
    unit,
    origin,
    productStatus,
    inventoryStatus,
    supplier,
    profit,
    orderStatus,
    paymentStatus,
    paymentMethod,
    receivedType,
  };
};

export default useSelectOption;
