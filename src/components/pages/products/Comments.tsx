import { Avatar } from "@mui/material";
import { useState } from "react";
import { Storage } from "../../../utils/local";
import { format } from "date-fns";

interface CommentsProps {
  item: Record<string, any>;
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
            return (
              <article
                className="py-6 text-base bg-white rounded-lg dark:bg-gray-900"
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
                <p className="text-gray-500 dark:text-gray-400">
                  {comment.comment}
                </p>
                <article className="p-6  pb-3 ml-4 pr-0 lg:ml-12 text-base bg-white border-l-2 border-solid border-background dark:bg-gray-900">
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
                  <div className="flex items-center mt-4 space-x-4">
                    <button
                      type="button"
                      className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
                    >
                      <svg
                        aria-hidden="true"
                        className="mr-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        ></path>
                      </svg>
                      Reply
                    </button>
                  </div>
                </article>
              </article>
            );
          })}
        </div>
      </section>
    </>
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
