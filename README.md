# The Laceless Life

# Live Site

https://the-laceless-life.herokuapp.com/

## Introduction

>The Laceless life is a responsive web application designed to provide comprehensive information on the basics of shoe tying. It also provides additional features such as geolocation and highly rated laceless shoes and the resources to buy them.   

## Code Samples

> Each shoe and its information is pulled from a custom-made API built with NodeJS and Express. The following is the Axios/API call to the backend to fetch all of the shoes and their information:

useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setShoe(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

> The backend sends back the following: 

router.get("/", (req, res) => {
  fs.readFile(formData, (err, data) => {
    let shoesInfo = JSON.parse(data);
    res.json(shoesInfo);
    if (err) console.log(err);
  });
});

> When a user clicks on a specific shoe, they get sent to a component that sends an Axios request using URL params to check and display info according to which shoe was chosen. Here is the request sent to the server using URL params:

useEffect(() => {
    axios
      .get(`${url}/${id}`)
      .then((res) => {
        setShoe(res.data);
        if (id) {
          return setShoeId(id);
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  }, [id, shoe]);

> The backend sends back the following: 

router.get("/:id", (req, res) => {
  fs.readFile(formData, (err, data) => {
    let shoesInfo = JSON.parse(data);
    let shoeId = req.params.id;
    const finder = shoesInfo.find((shoe) => shoe.id == shoeId);
    res.json(finder);
    console.log(finder);
  });
});

## Installation

> npm start
