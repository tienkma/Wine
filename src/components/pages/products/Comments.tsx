import { Avatar, Button } from "@mui/material";
import { useState } from "react";
import { Storage } from "../../../utils/local";
import { format } from "date-fns";
import { AiOutlineSend } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export const classNameInput =
  "block w-full p-2 text-gray-900 border-gray-300 bg-gray-20 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-0 !border rounded-lg";

interface CommentsProps {
  item: Record<string, any> | null;
}

export const Comments = (props: CommentsProps) => {
  const { item } = props;
  const [comments, setComments] = useState([]);

  const user = Storage.getLocal("user");

  return (
    <>
      <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 ">
        <div className="mx-auto px-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
              Discussion (20)
            </h2>
          </div>
          <form className="mb-6">
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <label htmlFor="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                rows={6}
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..."
                required
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-background rounded-lg focus:ring-4  hover:bg-color"
              >
                Post comment
              </button>
            </div>
          </form>

          {listComment.map((comment) => {
            return <Comment key={comment.id} comment={comment} />;
          })}
        </div>
      </section>
    </>
  );
};

interface CommentProps {
  comment: any;
}

const Comment = (props: CommentProps) => {
  const { comment } = props;
  const [activeComment, setActiveComment] = useState(false);
  const [valueComment, setValueComment] = useState("");

  return (
    <article
      className="py-6 text-base bg-white rounded-lg dark:bg-gray-900 group "
      key={comment.id}
    >
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
            <img
              className="mr-2 w-14 h-14 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
              alt="Michael Gough"
            />
            {comment.name}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <time dateTime="2022-02-08" title="February 8th, 2022">
              {format(comment.date, "MMM. h, yyyy")}
            </time>
          </p>
        </div>
        <button
          id="dropdownComment1Button"
          data-dropdown-toggle="dropdownComment1"
          className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          type="button"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
          </svg>
          <span className="sr-only">Comment settings</span>
        </button>
        {/* <!-- Dropdown menu --> */}
        <div
          id="dropdownComment1"
          className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
        >
          <ul
            className="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownMenuIconHorizontalButton"
          >
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Edit
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Remove
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Report
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <p className="text-gray-500 dark:text-gray-400">{comment.comment}</p>
      <div className="ml-6 border-l-2 border-solid">
        <article className="pb-3 ml-4 py-6 pr-0 lg:ml-8 text-base bg-white  border-background dark:bg-gray-900">
          <footer className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                <img
                  className="mr-2 w-14 h-14 rounded-full"
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
            <button
              id="dropdownComment2Button"
              data-dropdown-toggle="dropdownComment2"
              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              type="button"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
              </svg>
              <span className="sr-only">Comment settings</span>
            </button>
            {/* <!-- Dropdown menu --> */}
            <div
              id="dropdownComment2"
              className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownMenuIconHorizontalButton"
              >
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Remove
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Report
                  </a>
                </li>
              </ul>
            </div>
          </footer>
          <p className="text-gray-500 dark:text-gray-400">
            Much appreciated! Glad you liked it ☺️
          </p>
        </article>
        {activeComment ? (
          <div className=" ml-4 pr-0 lg:ml-8 mt-5">
            <FormComment />
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

interface FormCommentProps {}

const FormComment = (props: FormCommentProps) => {
  const { register, handleSubmit, formState, control } = useForm({
    resolver: yupResolver(
      Yup.object({
        email: Yup.string()
          .email("Email must be a valid email")
          .required("Please enter the value Email"),
        password: Yup.string().required().min(8, "Your password is too short."),
      })
    ),
  });

  const onSubmit = (values: Record<string, string>) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-between gap-5">
        <input
          {...register("name")}
          type="text"
          className={`text-sm bg-[#e5e5e5] ${classNameInput}`}
          placeholder="Name"
        />
        <input
          {...register("numberPhone")}
          type="text"
          className={`text-sm bg-[#e5e5e5] ${classNameInput}`}
          placeholder="Number Phone"
        />
        <input
          {...register("email")}
          type="email"
          className={`text-sm bg-[#e5e5e5] ${classNameInput}`}
          placeholder="Email"
        />
      </div>
      <div className="py-2 px-4 mb-4 bg-[#e5e5e5] mt-5 rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <label htmlFor="comment" className="sr-only">
          Your comment
        </label>
        <textarea
          id="comment"
          rows={6}
          className="px-0  w-full text-sm bg-[#e5e5e5] text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
          placeholder="Write a comment..."
          required
        ></textarea>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <i className="text-sm">
          To post a comment, you need to enter at least the name and content
          fields
        </i>
        <button className="right-4 text-white items-center text-sm !left-auto flex cursor-pointer bg-background hover:bg-color transition-colors px-10 py-2 rounded-3xl">
          <AiOutlineSend className="text-sm mr-1" size={16} />
          Post Comment
        </button>
      </div>
    </form>
  );
};

const listComment = [
  {
    avatarImage:
      "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    date: new Date(),
    comment:
      "Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects",
    id: 1,
    productId: "4",
    parentCommentId: null,
    name: "Name",
  },
  {
    avatarImage:
      "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    date: new Date(),
    comment:
      "Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects",
    id: 2,
    productId: "4",
    parentCommentId: null,
    name: "Name 2",
  },
  {
    avatarImage:
      "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    date: new Date(),
    comment:
      "Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects",
    id: 3,
    productId: "4",
    parentCommentId: 1,
    name: "Name 3",
  },
  {
    avatarImage:
      "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    date: new Date(),
    comment:
      "Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects",
    id: 4,
    productId: "4",
    parentCommentId: 2,
    name: "Name 4",
  },
  {
    avatarImage:
      "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    date: new Date(),
    comment:
      "Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects",
    id: 5,
    productId: "4",
    parentCommentId: 2,
    name: "Name 5",
  },
];
