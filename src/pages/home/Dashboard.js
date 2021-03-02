import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import Daftar from "../users/Daftar";
import { Route, Switch } from "react-router-dom";

const Dashboard = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Dashboard - USER ACCOUNT MASTER
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* <!-- Replace with your content --> */}
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
          </div>
          {/* <!-- /End replace --> */}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
