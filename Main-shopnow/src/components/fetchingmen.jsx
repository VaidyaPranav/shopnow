import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { menActions } from "../../store/menslice";
let Fetchingmen = () => {
  let fetchstatus = useSelector((store) => store.fetchstatus);
  let dispatch = useDispatch();
  console.log(fetchstatus);
  useEffect(() => {
    if (fetchstatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:3030/men", { signal })
      .then((res) => res.json())
      .then(({ men }) => {
        dispatch(menActions.addinitialitems(men));
      });

    return () => {
      controller.abort();
    };
  }, [fetchstatus]);

  return <></>;
};
export default Fetchingmen;
