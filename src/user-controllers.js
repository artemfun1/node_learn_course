
const users = [
  { id: 1, name: 'Name_One' },
  { id: 2, name: 'Name_Two' },
];

const getUser = (req, res) => {


  if(req.params.id){
    return res.send(users.find((user)=>user.id === +req.params.id))
  }

  res.send(users);
};

const createUser = (req, res) => {
  const user = req.body;
  users.push(user);

  res.send(users);
};

module.exports = {
  getUser,
  createUser
}