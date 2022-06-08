import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const TRACK_QUERY_TEMPLATE = 'https://itunes.apple.com/lookup?id={collectionId}&limit=50&entity=song'

export default function Resources({setAlertMessage}) { //setAlertMessage callback as prop
  const [trackData, setTrackData] = useState([]); //tracks to show
  const [isQuerying, setIsQuerying] = useState(false); //for spinner
  const [previewAudio, setPreviewAudio] = useState(null); //for playing previews!


  const urlParams = useParams(); //get album from URL

  const getData=()=>{
    fetch('../data/plays.json'
    ,{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });
  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <div>
      {isQuerying && <FontAwesomeIcon icon={faSpinner} spin size="4x" aria-label="Loading..." aria-hidden="false"/>}
      <div className="d-flex flex-wrap">
        {trackElemArray}
      </div>
    </div>
  )
}
