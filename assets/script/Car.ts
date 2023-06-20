import {_decorator, Component, Node, Vec3} from 'cc';
import {MoveType, RoadPoint} from 'db://assets/script/RoadPoint'

const {ccclass, property} = _decorator;

const tmpVec = new Vec3()

@ccclass('Car')
export class Car extends Component {
  private _curRoadPoint: RoadPoint = null;
  private _speed = 0.1;
  private _isMoving = false;
  private _offset = new Vec3();

  public update(dt: number) {
    if (this._isMoving) {
      this._offset.set(this.node.worldPosition)
      const pointA = this._curRoadPoint.node
      const pointB = this._curRoadPoint.nextStation
      switch (this._curRoadPoint.moveType) {
        case MoveType.CURVE:
          break;
        case MoveType.LINE:
        default:
          const dz = pointB.worldPosition.z - pointA.worldPosition.z
          if (dz !== 0) {
            if (dz > 0) this._offset.z += this._speed
            else this._offset.z -= this._speed
          }
      }
      this.node.setWorldPosition(this._offset)
      // Vec3.subtract(tmpVec, pointB.worldPosition, this._offset)
    }
  }


  public setEntry(entry: Node) {
    this.node.setWorldPosition(entry.worldPosition);
    this._curRoadPoint = entry.getComponent(RoadPoint)
  }

  public startRunning() {
    if (this._curRoadPoint) this._isMoving = true
  }

  public stopRunning() {
    if (this._curRoadPoint) this._isMoving = false
  }
}

