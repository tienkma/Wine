import { Avatar, Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { Storage } from "../../../utils/local";
import { format, formatDistanceToNowStrict } from "date-fns";
import { AiOutlineSend } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../../../redux/root/hooks";
import { addComment, selectListComment } from "../../../redux/silces/wineSlide";
import { CommentEntity } from "../../../models";
import { HookForm } from "../../form/HookForm";
import { InputField } from "../../form/HookFormInput";
import ActionButton from "../../../utils/ActionButton";
import productApi from "../../../api/productApi";
import { Link, useParams } from "react-router-dom";
import noAvata from "../../../assets/home/no-avt.png";
import { selectIsLogin } from "../../../redux/silces/authSlice";
import { RouterName } from "../../../routers/RouterName";

export const classNameInput =
  "block w-full p-2 text-gray-900 border-gray-300 bg-gray-20 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-0 !border rounded-lg";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #ccc",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};

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
            listComment
              .filter((item) => !item.currentId)
              .map((comment) => {
                const commentChild = listComment.filter(
                  (child) => child.currentId === comment._id
                );
                return (
                  <Comment
                    key={comment._id}
                    comment={comment}
                    commentChild={commentChild}
                  />
                );
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
  const dispatch = useAppDispatch();
  const { formState, control, register, handleSubmit, setValue } = useForm({
    resolver: yupResolver(
      Yup.object({
        content: Yup.string().required("Please enter the value comment"),
      })
    ),
  });
  const isLogin = useAppSelector(selectIsLogin);
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const onSubmit = async (values: any) => {
    if (isLogin) {
      try {
        const newComment = await productApi.createComment({
          ...values,
          productId: id,
        });

        if (newComment._id) {
          setValue("content", "");
          dispatch(addComment(newComment));
        }
      } catch (error) {
        console.log("error");
      }
    } else {
      handleOpen();
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
        <Modal
          open={openModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              sx={{ fontSize: "16px" }}
              variant="h6"
              component="h2"
            >
              Please login your smember account to comment
            </Typography>
            <div className="flex gap-3">
              <div className="flex-1">
                <Link
                  className="mt-5 flex py-1.5 rounded-sm capitalize  text-sm justify-center items-center transition-colors hover:bg-color bg-background font-medium"
                  to={RouterName.LOGIN}
                >
                  Login
                </Link>
              </div>
              <div className="flex-1">
                <Link
                  className="mt-5 flex py-1.5 rounded-sm capitalize  text-sm justify-center items-center transition-colors hover:bg-color bg-transparent hover:border-color border-background text-background hover:text-white border font-medium"
                  to={RouterName.REGISTER}
                >
                  Register
                </Link>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </form>
  );
};

interface CommentProps {
  comment: CommentEntity;
  commentChild: CommentEntity[];
}

const Comment = (props: CommentProps) => {
  const { comment, commentChild = [] } = props;
  const [activeComment, setActiveComment] = useState(false);
  const [valueComment, setValueComment] = useState("");

  return (
    <article
      className="pt-4 text-base bg-white rounded-lg dark:bg-gray-900 group "
      key={comment._id}
    >
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <img
            className="mr-2 w-12 h-12 rounded-full"
            src={noAvata}
            alt="Michael Gough"
          />
          <div>
            <strong className="inline-flex items-center mr-3 text-[13px] font-bold  text-background dark:text-white">
              {comment.user?.name}
            </strong>
            <i className="text-sm block text-gray-600 dark:text-gray-400">
              <time dateTime="2022-02-08" title="February 8th, 2022">
                {`${formatDistanceToNowStrict(
                  new Date(comment.createdAt)
                )} ago`}
              </time>
            </i>
          </div>
        </div>
      </footer>
      <p className="text-gray-500 dark:text-gray-400  text-sm pl-14 font-normal mb-2">
        {comment.content}
      </p>
      <div className="ml-14 border-l-2 border-solid border-l-[#a7a9ac]">
        {commentChild.map((childComment) => {
          return (
            <article
              className="pb-2.5 mb-2 ml-4 py-6 pr-0 lg:ml-8 text-base bg-white  border-background dark:bg-gray-900"
              key={childComment._id}
            >
              <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <img
                    className="mr-2 w-12 h-12 rounded-full"
                    src={noAvata}
                    alt={childComment.user.name}
                  />
                  <div>
                    <strong className="inline-flex items-center mr-3 text-[13px] font-bold  text-background dark:text-white">
                      {childComment.user.name}
                    </strong>
                    <i className="text-[13px] block text-gray-600 dark:text-gray-400">
                      <time dateTime="2022-02-12" title="February 12th, 2022">
                        {`${formatDistanceToNowStrict(
                          new Date(childComment.createdAt)
                        )} ago`}
                      </time>
                    </i>
                  </div>
                </div>
              </footer>
              <p className="text-gray-500 dark:text-gray-400 text-sm pl-14 font-normal">
                {childComment.content}
              </p>
            </article>
          );
        })}
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
  const dispatch = useAppDispatch();
  const { register, handleSubmit, formState, control, setError, setValue } =
    useForm({
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
      if (newComment._id) {
        setValue("content", "");
        dispatch(addComment(newComment));
      }
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
