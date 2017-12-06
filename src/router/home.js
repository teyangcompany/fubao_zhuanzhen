import Home from "../pages/home.vue"
import HomeMain from "../pages/home/main.vue"

import ConsultGroup from "./consult-group"

export default [
  {
    path: "/home",
    component: Home,
    meta: {
      needLogin: true
    },
    children: [
      {path: "", component: HomeMain},
      ...ConsultGroup
    ]
  }
]
