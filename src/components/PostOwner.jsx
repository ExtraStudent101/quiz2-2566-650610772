export const PostOwner = (Prop) => {
  return (
    <div className="vstack gap-3">
      <div className="d-flex align-items-center gap-3">
        <img
          src="/profileImages/IMG_0163.jpg"
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <span className="fw-semibold fs-5">
          {Prop.name} {Prop.id}
        </span>
      </div>

      <span>{Prop.quote}</span>

      <div className="d-flex align-items-center gap-1">
        <img src="/like.svg" width={20}></img>
        <span className="text-muted">100 คน</span>
      </div>
      <hr className="m-0 border" />
    </div>
  );
};
