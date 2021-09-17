import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../../utils/validators/validators";
import { Textarea } from "../../../common/FormsControls/FormsControls";
// import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profile-reducer';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo(props => {
  let postsElements = props.post.map( p =>
    <Post message={p.message} likesCount={p.likesCount} />
  );

  //let newPostElement = React.createRef();

  let addPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts </h3>
      <AddNewPostFormRedux onSubmit={addPost}/>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );

});

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <div>
          <Field name="newPostText" component={Textarea} placeholder={"Post message"} validate={[required, maxLength10]}/>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      </form>
  )
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

export default MyPosts;
