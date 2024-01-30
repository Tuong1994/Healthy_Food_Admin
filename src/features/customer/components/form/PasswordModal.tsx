import { FC } from "react";
import { Modal } from "@/components/UI";
import { Form, FormItem, InputPassword } from "@/components/Control";
import type { Lang } from "@/common/type";
import type { ModalProps } from "@/components/UI/Modal";
import type { CustomerPassword } from "@/services/customer/type";
import useForm from "@/components/Control/Form/useForm";

interface AddressModalProps extends ModalProps {
  lang: Lang;
}

const AddressModal: FC<AddressModalProps> = ({ lang, ...restProps }) => {
  const form = useForm();

  const modalDefaultProps: ModalProps = {
    color: "green",
    sizes: "sm",
    cancelButtonProps: { ghost: true },
    head: lang.customer.form.changePass,
    ...restProps,
  };

  const initialData: CustomerPassword = {
    newPassword: "",
    oldPassword: "",
    customerId: "",
  };

  const handleSubmit = (data: CustomerPassword) => {
    console.log(data);
  };

  return (
    <Modal {...modalDefaultProps} onOk={form?.handleSubmit}>
      <Form<CustomerPassword> color="green" initialData={initialData} onFinish={handleSubmit}>
        <FormItem name="oldPassword">
          <InputPassword label={lang.common.form.label.oldPassword} />
        </FormItem>
        <FormItem name="newPassword">
          <InputPassword label={lang.common.form.label.newPassword} />
        </FormItem>
      </Form>
    </Modal>
  );
};

export default AddressModal;