import Vue from 'vue'
import {
  Card, CycleButton, ParamsItem, 
  Swipe, ParamsList, FinalParam
} from '~/components/Global'

const components = { Card, CycleButton, ParamsItem, Swipe, ParamsList, FinalParam  }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
