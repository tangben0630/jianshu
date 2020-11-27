import React from 'react';
import Sign from './sign'
import { useHistory } from 'react-router-dom'
import './index.less'
import store from '../../store';
import { set } from '../../store/action'

const List: React.FC = (props: any): any => {
  const listData = [
    {
      t: '想放弃了',
      c: "坚持了这么长时间的写作，不知道为什么，这几天再也坚持不下去，其实也不是不想写，就是一定的时间内不知道写什么",
      r: 6238,
      p: "树下野狐",
      co: 29,
      f: 43,
      src: 'https://upload-images.jianshu.io/upload_images/9780932-ddf758b61c5d4fc0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/160/h/160/format/webp'
    },
    {
      src: 'https://upload-images.jianshu.io/upload_images/22122166-ac62256c68092542.png?imageMogr2/auto-orient/strip|imageView2/1/w/160/h/160/format/webp',
      t: '想放弃了',
      c: "坚持了这么长时间的写作，不知道为什么，这几天再也坚持不下去，其实也不是不想写，就是一定的时间内不知道写什么",
      r: 6238,
      p: "草花也灿烂",
      co: 29,
      f: 43
    }, {
      t: '想放弃了',
      src: 'https://upload-images.jianshu.io/upload_images/21523013-efd6305e2e7f0988.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/160/h/160/format/webp',
      c: "坚持了这么长时间的写作，不知道为什么，这几天再也坚持不下去，其实也不是不想写，就是一定的时间内不知道写什么",
      r: 6238,
      p: "陆云",
      co: 29,
      f: 43
    },
    {
      t: '想放弃了',
      c: "坚持了这么长时间的写作，不知道为什么，这几天再也坚持不下去，其实也不是不想写，就是一定的时间内不知道写什么",
      r: 6238,
      p: "叶凡",
      co: 29,
      f: 43,
      src: 'https://upload-images.jianshu.io/upload_images/11524092-b63fb07ee19563bf.png?imageMogr2/auto-orient/strip|imageView2/1/w/160/h/160/format/webp'
    },
    {
      t: '想放弃了',
      c: "坚持了这么长时间的写作，不知道为什么，这几天再也坚持不下去，其实也不是不想写，就是一定的时间内不知道写什么",
      r: 6238,
      p: "总有那么几天",
      co: 29,
      f: 43,
      src: 'https://upload-images.jianshu.io/upload_images/5138471-05844555c627b70e.png?imageMogr2/auto-orient/strip|imageView2/1/w/160/h/160/format/webp'
    },
    {
      t: '想放弃了',
      c: "坚持了这么长时间的写作，不知道为什么，这几天再也坚持不下去，其实也不是不想写，就是一定的时间内不知道写什么",
      r: 6238,
      p: "草花也灿烂",
      co: 29,
      f: 43
    },
  ]
  const history = useHistory()
  function jump() {
    history.push('/detail')
  }
  function setName() {
    const action = set('赤木')
    store.dispatch(action)
  }
  const listItem = listData.map((item, i) => (
    <div className="list-i" key={i}>
      <h3 onClick={() => { jump() }}>{item.t}</h3>
      <p className="con" onClick={() => { setName() }}>{item.c}</p>
      <div className="bot">
        {/* {item.p} */}
        <Sign item={item} />
      </div>
      <img src={item.src} alt="" className="li-img" />
    </div>
  ))
  return (
    <div className="list-w">
      {listItem}
    </div>
  )
}


export default List