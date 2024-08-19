// const viewNote = (event) => {
//     setOpen(!open);
// };
const data = [
    {
        title: "This is ",
        description:
            "This is Description oneThis is Description oneThis is Description oneThis is Description oneThis is Description oneThis is Description oneThis is Description one",
    },
    {
        title: "This is title twoThis is title twoThis is title twoThis is title twoThis is title twoThis is title two",
        description:
            "This is Description twoThis is Description twoThis is Description twoThis is Description twoThis is Description twoThis is Description twoThis is Description twoThis is Description two",
    },
    {
        title: "This is title threeThis is title threeThis is title threeThis is title threeThis is title threeThis is title threeThis is title three",
        description:
            "This is Description threeThis is Description threeThis is Description threeThis is Description threeThis is Description threeThis is Description threeThis is Description threeThis is Description threeThis is Description three",
    },
    {
        title: "This is ",
        description:
            "This is Description oneThis is Description oneThis is Description oneThis is Description oneThis is Description oneThis is Description oneThis is Description one",
    },
    {
        title: "This is title twoThis is title twoThis is title twoThis is title twoThis is title twoThis is title two",
        description:
            "This is Description twoThis is Description twoThis is Description twoThis is Description twoThis is Description twoThis is Description twoThis is Description twoThis is Description two",
    },
    {
        title: "This is title threeThis is title threeThis is title threeThis is title threeThis is title threeThis is title threeThis is title three",
        description:
            "This is Description threeThis is Description threeThis is Description threeThis is Description threeThis is Description threeThis is Description threeThis is Description threeThis is Description threeThis is Description three",
    },
    {
        title: "This is ",
        description:
            "This is Description oneThis is Description oneThis is Description oneThis is Description oneThis is Description oneThis is Description oneThis is Description one",
    },
    {
        title: "This is title twoThis is title twoThis is title twoThis is title twoThis is title twoThis is title two",
        description:
            "This is Description twoThis is Description twoThis is Description twoThis is Description twoThis is Description twoThis is Description twoThis is Description twoThis is Description two",
    },
    {
        title: "This is title threeThis is title threeThis is title threeThis is title threeThis is title threeThis is title threeThis is title three",
        description:
            "This is Description threeThis is Description threeThis is Description threeThis is Description threeThis is Description threeThis is Description threeThis is Description threeThis is Description threeThis is Description three",
    },
    {
        title: "This is ",
        description:
            "This is Description oneThis is Description oneThis is Description oneThis is Description oneThis is Description oneThis is Description oneThis is Description one",
    },
    {
        title: "This is title twoThis is title twoThis is title twoThis is title twoThis is title twoThis is title two",
        description:
            "This is Description twoThis is Description twoThis is Description twoThis is Description twoThis is Description twoThis is Description twoThis is Description twoThis is Description two",
    },
    {
        title: "This is title threeThis is title threeThis is title threeThis is title threeThis is title threeThis is title threeThis is title three",
        description:
            "This is Description threeThis is Description threeThis is Description threeThis is Description threeThis is Description threeThis is Description threeThis is Description threeThis is Description threeThis is Description three",
    },
    {
        title: "This is ",
        description:
            "This is Description oneThis is Description oneThis is Description oneThis is Description oneThis is Description oneThis is Description oneThis is Description one",
    },
    {
        title: "This is title twoThis is title twoThis is title twoThis is title twoThis is title twoThis is title two",
        description:
            "This is Description twoThis is Description twoThis is Description twoThis is Description twoThis is Description twoThis is Description twoThis is Description twoThis is Description two",
    },
    {
        title: "This is title threeThis is title threeThis is title threeThis is title threeThis is title threeThis is title threeThis is title three",
        description:
            "This is Description threeThis is Description threeThis is Description threeThis is Description threeThis is Description threeThis is Description threeThis is Description threeThis is Description threeThis is Description three",
    },
    {
        title: "This is ",
        description:
            "This is Description oneThis is Description oneThis is Description oneThis is Description oneThis is Description oneThis is Description oneThis is Description one",
    },
    {
        title: "This is title twoThis is title twoThis is title twoThis is title twoThis is title twoThis is title two",
        description:
            "This is Description twoThis is Description twoThis is Description twoThis is Description twoThis is Description twoThis is Description twoThis is Description twoThis is Description two",
    },
    {
        title: "This is title threeThis is title threeThis is title threeThis is title threeThis is title threeThis is title threeThis is title three",
        description:
            "This is Description threeThis is Description threeThis is Description threeThis is Description threeThis is Description threeThis is Description threeThis is Description threeThis is Description threeThis is Description three",
    },
];
const randomSize = [];
for (let i = 0; i < data.length; i++) {
    let randomNumber = Math.floor(Math.random() * 99);
    randomSize.push(randomNumber);
}

export { data, randomSize }