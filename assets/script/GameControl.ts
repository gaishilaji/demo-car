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

    public onLoad() {
        this.mapManager.resetMap()
        this.carManager.resetCars(this.mapManager.curPath)
    }

    public start() {
        this.node.on(Node.EventType.TOUCH_START, this._handleTouchStart, this)
        this.node.on(Node.EventType.TOUCH_END, this._handleTouchEnd, this)
    }

    /**
     * 触摸按下小车移动
     * @private
     */
    private _handleTouchStart() {
        this.carManager.controlMoving(true)
    }

    /**
     * 触摸释放小车停止移动
     * @private
     */
    private _handleTouchEnd() {
        this.carManager.controlMoving(false)
    }
}

