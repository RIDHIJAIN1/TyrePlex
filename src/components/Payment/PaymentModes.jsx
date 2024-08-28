import { MdAccountBalanceWallet } from "react-icons/md";
import { FaAddressCard, FaWallet } from "react-icons/fa";
import { AiTwotoneBank } from "react-icons/ai";
import { FaCcAmazonPay } from "react-icons/fa";
import React from "react";

const PaymentModes = () => {
  return (
    <div>
      <div className="w-full bg-black bg-opacity-70 my-10 shadow-md p-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mt-5 m-10 pb-5">
          PAYMENT MODE
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-lg my-8 mx-4 sm:mx-10 lg:mx-20">
          <div className="flex justify-center">
            <div className="bg-white shadow-lg rounded-lg p-4 w-48 flex items-center">
              <MdAccountBalanceWallet className="text-red-500 text-2xl mr-2" />
              <span>Deposit to Account</span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-white shadow-lg rounded-lg p-4 w-48 flex items-center">
              <FaAddressCard className="text-red-500 text-2xl mr-2" />
              <span>Credit/Debit Card</span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-white shadow-lg rounded-lg p-4 w-48 flex items-center">
              <FaWallet className="text-red-500 text-2xl mr-2" />
              <span>Net Banking</span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-white shadow-lg rounded-lg p-4 w-48 flex items-center">
              <AiTwotoneBank className="text-red-500 text-2xl mr-2" />
              <span>UPI</span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-white shadow-lg rounded-lg p-4 w-48 flex items-center">
              <FaCcAmazonPay className="text-red-500 text-2xl mr-2" />
              <span>Wallets</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModes;