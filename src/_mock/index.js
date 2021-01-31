import Mock from 'mockjs';

const USERS = [
  { uid: '1234567890', username: 'admin', password: 'admin' }
];

Mock.mock('/api/user/login', 'post', ({ body }) => {
  let params = JSON.parse(body) || {};
  let found = USERS.find(n => (
    (n.username === params.username) &&
    (n.password === params.password)
  ));
  if (found) return Object.assign(params, { code: 0 });
  return { msg: '用户名或密码错误！', code: 1 };
});

Mock.mock('/api/user/register', 'post', ({ body }) => {
  let params = JSON.parse(body) || {};
  let found = USERS.find(n => n.username === params.username);
  if (found) return { msg: '该用户已存在!', code: 1 };
  USERS.push({
    uid: (Math.random() * 1000 * 1000).toString(16).substr(0, 16),
    username: params.username,
    password: params.password
  });
  return { code: 0 };
});