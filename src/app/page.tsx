"use client"

import First from "./home/First"
import Fivth from "./home/Fivth"
import Fourth from "./home/Fourth"
import Second from "./home/Second"
import Seven from "./home/Seven"
import Six from "./home/Six"
import Third from "./home/Third"

export default function Home() {

  return (
    <div>
         <div id="first"><First /></div>
      <div id="second"><Second /></div>
      <div id="third"><Third /></div>
      <div id="fourth"><Fourth /></div>
      <div id="fivth"><Fivth /></div>
      <div id="six"><Six /></div>
      <div id="seven"><Seven /></div>
      
    </div>
  )
}
