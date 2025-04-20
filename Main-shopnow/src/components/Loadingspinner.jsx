let Loadingspinner = () => {
  return (
    <div class="d-flex justify-content-center spinner" role="status">
      <div
        class="spinner-border"
        role="status"
        style={{ width: "5rem", height: "5rem" }}
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
export default Loadingspinner;
