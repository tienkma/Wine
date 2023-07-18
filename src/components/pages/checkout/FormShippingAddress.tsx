import { useForm } from "react-hook-form";
import { HookForm } from "../../form/HookForm";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputField } from "../../form/HookFormInput";
import ActionButton from "../../../utils/ActionButton";
import orderApi from "../../../api/orderApi";
import { CartEntity } from "../../../models";
import { Toasts } from "../../../utils/notification";
import { Navigate, useNavigate } from "react-router-dom";
import { RouterName } from "../../../routers/RouterName";
import { useAppDispatch } from "../../../redux/root/hooks";
import { clearCart, removeItem } from "../../../redux/silces/cartSlide";

interface FormShippingAddressProps {
  checkoutCart: CartEntity[];
}

export const FormShippingAddress = (props: FormShippingAddressProps) => {
  const { register, handleSubmit, formState, control } = useForm({
    resolver: yupResolver(
      Yup.object({
        firstName: Yup.string().required("Please enter the value first name"),
        lastName: Yup.string().required("Please enter the value last name"),
        address: Yup.string().required("Please enter the value address"),
        city: Yup.string().required("Please enter the value city"),
        postCode: Yup.string().required("Please enter the value post code"),
      })
    ),
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (values: any) => {
    if (props.checkoutCart?.length) {
      const data: any = await orderApi.createOrder({
        ...values,
        products: props.checkoutCart,
        total: 500,
      });
      if (data?._id) {
        Toasts.success("Success");
        dispatch(removeItem(props.checkoutCart.map((item) => item._id)));
        navigate(RouterName.ORDERS);
      }
    }
  };

  return (
    <form
      className="justify-center w-full mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="">
        <div className="space-x-0 lg:flex lg:space-x-4">
          <div className="w-full lg:w-1/2">
            <label
              htmlFor="firstName"
              className="block mb-3 text-sm font-semibold text-gray-600"
            >
              First Name
            </label>
            <InputField
              formState={formState}
              control={control}
              register={register}
              name="firstName"
              placeholder="First Name"
              className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div className="w-full lg:w-1/2 max-md:mt-4">
            <label
              htmlFor="firstName"
              className="block mb-3 text-sm font-semibold text-gray-600"
            >
              Last Name
            </label>
            <InputField
              formState={formState}
              control={control}
              register={register}
              name="lastName"
              placeholder="Last Name"
              className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
        </div>
        <div className="mt-4">
          <div className="w-full">
            <label
              htmlFor="Address"
              className="block mb-3 text-sm font-semibold text-gray-600"
            >
              Address
            </label>
            <InputField
              formState={formState}
              control={control}
              register={register}
              name="address"
              customInput={({ field: { onChange, onBlur, value, ref } }) => {
                return (
                  <textarea
                    className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    cols={20}
                    rows={4}
                    onChange={onChange} // send value to hook form
                    onBlur={onBlur}
                    name="address"
                    placeholder="Address"
                    defaultValue={""}
                    value={value}
                  />
                );
              }}
            />
          </div>
        </div>
        <div className="space-x-0 lg:flex lg:space-x-4">
          <div className="w-full lg:w-1/2">
            <label
              htmlFor="city"
              className="block mb-3 text-sm font-semibold text-gray-600"
            >
              City
            </label>
            <InputField
              formState={formState}
              control={control}
              register={register}
              name="city"
              placeholder="City"
              className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div className="w-full lg:w-1/2 max-md:mt-4">
            <label
              htmlFor="postcode"
              className="block mb-3 text-sm font-semibold text-gray-600"
            >
              Postcode
            </label>
            <InputField
              formState={formState}
              control={control}
              register={register}
              name="postCode"
              placeholder="Post Code"
              className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
        </div>
        <div className="flex items-center mt-4">
          <label className="flex items-center text-sm group text-heading">
            <input
              type="checkbox"
              className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1"
            />
            <span className="ml-2">Save this information for next time</span>
          </label>
        </div>
        <div className="relative pt-3 xl:pt-6">
          <label
            htmlFor="note"
            className="block mb-3 text-sm font-semibold text-gray-600"
          >
            {" "}
            Notes (Optional)
          </label>

          <InputField
            formState={formState}
            control={control}
            name="note"
            register={register}
            customInput={({ field: { onChange, onBlur, value, ref } }) => {
              return (
                <textarea
                  name="note"
                  className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                  rows={4}
                  placeholder="Notes for delivery"
                  defaultValue={""}
                  value={value}
                  onChange={onChange}
                />
              );
            }}
          />
        </div>
        <div className="mt-4">
          <ActionButton
            className="w-full px-6 py-2 text-white bg-background hover:bg-color rounded-[4px] transition-colors"
            onClick={handleSubmit(onSubmit)}
          >
            Confirm Order
          </ActionButton>
        </div>
      </div>
    </form>
  );
};
