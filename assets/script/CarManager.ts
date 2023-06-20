import { _decorator, Component, Node } from 'cc';
import {Car} from 'db://assets/script/Car'
const { ccclass, property } = _decorator;

@ccclass('CarManager')
export class CarManager extends Component {
    @property({
        type: Car
    })
    mainCar: Car = null

    public controlMoving(moving) {
        if (moving) {
            this.mainCar.startRunning()
        } else {
            this.mainCar.stopRunning()
        }
    }
    public resetCars(points: Node[]) {
        if (points.length <= 0) {
            console.warn('no point')
            return
        }
        this._createMainCar(points[0])
    }

    private _createMainCar(point: Node) {
        this.mainCar.setEntry(point)
    }
}

