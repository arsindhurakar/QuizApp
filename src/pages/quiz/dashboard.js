import React from "react";

import Layout from "../../components/layout";
import Topbar from "../../components/topbar";
import Content from "../../components/layout/content";
import Button from "../../components/button/buttonDashboard";

import QuizStart from "./quizStart";

const Dashboard = () => {
  const handleLogout = () => {
    window.localStorage.setItem("loggedIn", "false");
    window.localStorage.setItem("loggedInUser", "false");
    window.location.reload();
  };

  return (
    <div>
      <Layout>
        <Topbar>
          <Button onClick={handleLogout}>Logout</Button>
        </Topbar>
        <Content>
          <QuizStart />
        </Content>
      </Layout>
    </div>
  );
};

export default Dashboard;
