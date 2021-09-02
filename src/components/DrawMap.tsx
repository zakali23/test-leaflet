
import { FeatureGroup } from 'react-leaflet'
import {EditControl} from 'react-leaflet-draw';
import '../style/DrawMap.css'
import {EventLayer} from '../interfaces/EventLayer'
const DrawMap = () => {
    // all functions create and delete and edit draw
    const _onCreate = (e:EventLayer) =>{
        //console.log(e.layer.getLatlngs());
        const {layer,layerType} = e;
        const{_latlngs,_leaflet_id}=layer;
        console.log(_latlngs,_leaflet_id,layerType);
       
    }

    const _onEdited = (e:Event) =>{
    }

    const _onDeleted = (e:Event) =>{
    }
    return (
        <FeatureGroup>
        <EditControl position="topright" 
        onCreated={_onCreate} 
        onEdited={_onEdited} 
        onDeleted={_onDeleted} 
        draw={{
          rectangle:false,
          polyline:false,
          circle:false,
          circlemarker:false,
          marker:false

        }} />
      </FeatureGroup>
    )
}
export default DrawMap;