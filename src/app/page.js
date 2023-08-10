"use client";
import { PostOwner } from "@/components/PostOwner";
import { comments } from "@/libs/comments";
import { Comment } from "@/components/Comment";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        <PostOwner
          name="Theerapat Lumtan"
          id="650610772"
          quote="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"
        />

        {/* Comment Example */}
        {comments.map((user) => (
          <Comment
            userImagePath={user.userImagePath}
            username={user.username}
            commentText={user.commentText}
            likeNum={user.likeNum}
            replies={user.replies}
            key={user.username}
          />
        ))}

        <div className="d-flex gap-2 my-2">
          <img
            src="/profileImages/lisa.jpg"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#E5E7EB" }}
          >
            <span className="fw-semibold">Lisa</span>
            <br />
            <span>จริงค่า</span>
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span className="text-muted">999 คน</span>
            </div>
          </div>
        </div>

        {/* Reply Example */}
        <div className="d-flex gap-2 my-2 ps-5">
          <img
            src="/profileImages/puppy.jpg"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#E5E7EB" }}
          >
            <span className="fw-semibold">หมาน้อย</span>
            <br />
            <span>จริงค้าบบบบบบบบ</span>
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span className="text-muted">2 คน</span>
            </div>
          </div>
        </div>

        {/* map-loop render Comment component here */}
      </div>
    </div>
  );
}
