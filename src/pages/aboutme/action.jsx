async function sleep(msec = 600) {
  return new Promise((resolve) => setTimeout(resolve, msec));
}

const getData = async (setData, setLoading) => {
  setLoading(true);
  const data = {
    subtitle: "AHMAD RIFAL",
    title: "As Frontend Developer.",
    desc: "I am a highly competent IT Web Developer with a proven track record in designing UI, create web system as fullstack developer and managing databases. I have strong technical skills and communicate very well. I am eager to be challenged in order to grow and further improve my IT skills.",
    image: "/assets/image/developer2.jpg",
  };
  setData(data);
  await sleep();
  setLoading(false);
};

const Action = {
  getData,
};

export default Action;
