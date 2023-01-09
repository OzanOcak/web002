`use client`;
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_NAME } from "../redux/reducers/profileReducer";

const DisplayName = () => {
  const { name } = useSelector((state) => state.profile);
  return <div>hello, {name}</div>;
};

const Name = () => {
  const name = useRef();
  const dispatch = useDispatch();

  const print = () => {
    console.log(name.current.value);
    dispatch(SET_NAME(name.current.value));
  };
  return (
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96">
        <label
          htmlFor="exampleFormControlInput1"
          className="form-label inline-block mb-2 text-gray-700"
        >
          What is your name?
        </label>
        <div>
          <div className="flex space-x-.5 justify-center h-[2rem]">
            <input
              type="text"
              ref={name}
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
         bg-white bg-clip-padding border border-solid border-gray-300 rounded transition
          ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput1"
              placeholder="Example label"
            />
            <button
              type="button"
              onClick={print}
              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium
           text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700
           hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none 
           focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150
           ease-in-out"
            >
              Button
            </button>
          </div>
        </div>
      </div>
      <DisplayName />
    </div>
  );
};
export default Name;
