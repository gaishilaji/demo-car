import { _decorator, Component, Node } from 'cc';
import {CarManager} from 'db://assets/script/CarManager'
import {MapManager} from 'db://assets/script/MapManager'
const { ccclass, property } = _decorator;

@ccclass('GameControl')
export class GameControl extends Component {
    @property({
        type: MapManager,
    })
    mapManager: MapManager = null;

    @property({
        type: CarManager
    })
    carManager: CarManager = null;
}

