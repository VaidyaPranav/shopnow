import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { womenActions } from "../../store/womenslice";
let Fetchingwomen = () => {
  let fetchstatus = useSelector((store) => store.fetchstatus);
  let dispatch = useDispatch();
  console.log(fetchstatus);
  useEffect(() => {
    if (fetchstatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:3030/women", { signal })
      .then((res) => res.json())
      .then(({ women }) => {
        dispatch(womenActions.addinitialitems(women));
      });

    return () => {
      controller.abort();
    };
  }, [fetchstatus]);

  return <></>;
};
export default Fetchingwomen;
