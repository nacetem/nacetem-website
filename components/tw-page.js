import React from "react";
import { Timeline } from "react-twitter-widgets";

export default {
  title: "Timeline",
  component: Timeline
};

export const ProfileDarkTheme = () => (<>
<Timeline
      dataSource={{ sourceType: "profile", screenName: "‎nacetemng1" }}
      options={{ theme: "dark", width: "340", height: "600" }}
    />
    </>
  );
  