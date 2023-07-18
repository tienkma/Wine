import { Avatar, Button } from "@mui/material";
import { useState } from "react";
import { Storage } from "../../../utils/local";
import { format } from "date-fns";
import { AiOutlineSend } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useAppSelector } from "../../../redux/root/hooks";
import { selectListComment } from "../../../redux/silces/wineSlide";
import { CommentEntity } from "../../../models";
import { HookForm } from "../../form/HookForm";
import { InputField } from "../../form/HookFormInput";
import ActionButton from "../../../utils/ActionButton";
import productApi from "../../../api/productApi";
import { useParams } from "react-router-dom";

export const classNameInput =
  "block w-full p-2 text-gray-900 border-gray-300 bg-gray-20 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-0 !border rounded-lg";

interface CommentsProps {}

export const Comments = (props: CommentsProps) => {
  const listComment = useAppSelector(selectListComment);

  return (
    <>
      <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 ">
        <div className="mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
              Discussion ({listComment?.length || 0})
            </h2>
          </div>
          <FormCommentCreate />

          {listComment?.length ? (
            listComment.map((comment) => {
              return <Comment key={comment._id} comment={comment} />;
            })
          ) : (
            <p className="font-bold">
              There are currently no comments. Be the first to comment.
            </p>
          )}
        </div>
      </section>
    </>
  );
};

const FormCommentCreate = () => {
  const { id } = useParams();

  const { formState, control, register, handleSubmit } = useForm({
    resolver: yupResolver(
      Yup.object({
        content: Yup.string().required("Please enter the value comment"),
      })
    ),
  });

  const onSubmit = async (values: any) => {
    try {
      const newComment = await productApi.createComment({
        ...values,
        productId: id,
      });
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <form className="mb-6">
      <InputField
        formState={formState}
        control={control}
        register={register}
        name="content"
        customInput={({ field: { onChange, onBlur, value, ref } }, valid) => {
          return (
            <textarea
              id="content"
              rows={6}
              className={`flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600 mb-4 `}
              placeholder="Write a comment..."
              onChange={onChange} // send value to hook form
              onBlur={onBlur}
              value={value}
            ></textarea>
          );
        }}
      />

      <div className="flex justify-end">
        <ActionButton
          onClick={handleSubmit(onSubmit)}
          className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-background rounded-[4px] focus:ring-4  hover:bg-color"
        >
          Post comment
        </ActionButton>
      </div>
    </form>
  );
};

interface CommentProps {
  comment: CommentEntity;
}

const Comment = (props: CommentProps) => {
  const { comment } = props;
  const [activeComment, setActiveComment] = useState(false);
  const [valueComment, setValueComment] = useState("");

  return (
    <article
      className="pt-4 text-base bg-white rounded-lg dark:bg-gray-900 group "
      key={comment._id}
    >
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-[15px] font-normal  text-background dark:text-white">
            <img
              className="mr-2 w-8 h-18 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
              alt="Michael Gough"
            />
            {comment.user?.name}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <time dateTime="2022-02-08" title="February 8th, 2022">
              {format(new Date(comment.createdAt), "MMM. h, yyyy")}
            </time>
          </p>
        </div>
      </footer>
      <p className="text-gray-500 dark:text-gray-400 pl-5 mb-2">
        {comment.content || "fbdshfsd"}
      </p>
      <div className="ml-6 border-l-2 border-solid">
        <article className="pb-2.5 mb-2 ml-4 py-6 pr-0 lg:ml-8 text-base bg-white  border-background dark:bg-gray-900">
          <footer className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <p className="inline-flex items-center mr-3 text-[15px] font-normal  text-background dark:text-white">
                <img
                  className="mr-2 w-8 h-18 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="Jese Leos"
                />
                Jese Leos
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <time dateTime="2022-02-12" title="February 12th, 2022">
                  Feb. 12, 2022
                </time>
              </p>
            </div>
          </footer>
          <p className="text-gray-500 dark:text-gray-400">
            Much appreciated! Glad you liked it ☺️
          </p>
        </article>
        {activeComment ? (
          <div className=" ml-4 pr-0 lg:ml-8 mt-5">
            <FormComment comment={comment} />
          </div>
        ) : (
          <div
            className={`relative  ml-4 pr-0 lg:ml-8 focus:block focus:first:block ${
              !valueComment ? "hidden group-hover:block" : ""
            } mt-5 `}
          >
            <input
              type="text"
              className="w-full rounded-lg"
              placeholder="Enter your comment"
              onFocus={() => setActiveComment(true)}
              value={valueComment}
              onChange={(e) => setValueComment(e.target.value)}
            />
            <button className="right-4 text-blue-500 !left-auto centerAb cursor-pointer">
              <AiOutlineSend className=" " size={22} />
            </button>
          </div>
        )}
      </div>
    </article>
  );
};

interface FormCommentProps {
  comment: CommentEntity;
}

const FormComment = (props: FormCommentProps) => {
  const { comment } = props;
  const { register, handleSubmit, formState, control, setError } = useForm({
    resolver: yupResolver(
      Yup.object({
        content: Yup.string()
          .min(20, "Please enter a minimum of 20 characters")
          .required("Please input the value"),
      })
    ),
  });

  const { id } = useParams();

  const onSubmit = async (values: any) => {
    try {
      const newComment = await productApi.createComment({
        ...values,
        productId: id,
        currentId: comment._id,
      });
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        formState={formState}
        control={control}
        register={register}
        name="content"
        customInput={({ field: { onChange, onBlur, value, ref } }, valid) => {
          return (
            <textarea
              name="content"
              id="content"
              rows={6}
              className={`flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600 mb-4`}
              placeholder="Write a comment..."
              onChange={onChange} // send value to hook form
              onBlur={onBlur}
              value={value}
            ></textarea>
          );
        }}
      />
      <div className="mt-4 flex justify-end items-center">
        <ActionButton
          onClick={handleSubmit(onSubmit)}
          className="right-4 text-white items-center text-sm !left-auto flex cursor-pointer bg-background hover:bg-color transition-colors px-10 py-2 rounded-3xl"
        >
          <AiOutlineSend className="text-sm mr-1" size={16} />
          Post Comment
        </ActionButton>
      </div>
    </form>
  );
};
