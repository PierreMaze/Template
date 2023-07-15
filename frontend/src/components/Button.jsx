const Button = () => {
  return (
    <div className="box bg">
      <button className="button button--green button--border-thick button--size-s">
        Get New
      </button>
      <button className="button button--green button--pink button--border-thick button--size-s">
        Add New
      </button>
      <button className="button button--green button--blue button--border-thick button--size-s">
        Update
      </button>
      <button className="button button--green button--red button--border-thick button--size-s">
        Delete
      </button>
    </div>
  );
};

export default Button;
