import merge from "webpack-merge";
import common from "./webpack.config.babel";

export default merge(common, {
  mode: "production"
});
