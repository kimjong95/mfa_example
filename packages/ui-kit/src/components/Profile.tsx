import { type User } from "@auth0/auth0-spa-js";
import React from "react";
import styles from "./Profile.module.css";

interface UserType extends User {
  view_count: number;
  update_count: number;
  courses: { courseId: number; done: false }[];
}

export interface CourseType {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
}

export interface CourseContentsType {
  id: number;
  goals: string[];
  summaries: string[];
}

interface ProfileProps {
  user: UserType | null;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  if (user === null) {
    return null;
  }

  const { picture, name, email, view_count, update_count } = user;

  return (
    <div>
      <div className={styles["profile-top"]}>
        <img src={picture} />
        <div className={styles["profile-name"]}>{name}</div>
        <div className={styles["profile-email"]}>{email}</div>
      </div>
      <div className={styles["profile-bottom"]}>
        <div className={styles["profile-bottom-item"]}>
          <div>프로필 조회자</div>
          <div className={styles["profile-bottom-fount"]}>{view_count}</div>
        </div>
        <div className={styles["profile-bottom-item"]}>
          <div>업데이트 노출</div>
          <div className={styles["profile-bottom-fount"]}>{update_count}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
