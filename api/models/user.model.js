import mongoose from "mongoose";

/* esquema, las reglas a aplicar */
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    profilePicture: {
      type: String,
      default: "https://i.redd.it/v0caqchbtn741.jpg",
    },
  },
  {
    timestamps: true,
  } /* guardo tiempo de creacion y actualizacion de usuario */
);

/* creo modelo */
const User = mongoose.model("User", userSchema);

export default User;
