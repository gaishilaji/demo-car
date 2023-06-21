import {_decorator, Component, Node, Vec3, Enum} from 'cc';

const {ccclass, property} = _decorator;


export enum RoadPointType {
  NORMAL,
  START,
  GREETING,
  GOODBYE,
  END,
  AI_START
}
Enum(RoadPointType)

export enum MoveType {
  LINE,
  CURVE
}
Enum(MoveType)

@ccclass('RoadPoint')
export class RoadPoint extends Component {
  @property({
    type: RoadPointType,
    displayOrder: 1,
    displayName: '道路点类型'
  })
  type = RoadPointType.NORMAL

  @property({
    type: MoveType,
    displayOrder: 2,
    displayName: '移动类型',
    visible: function (this: RoadPoint) {
      return this.type !== RoadPointType.END
    }
  })
  moveType = MoveType.LINE;

  @property({
    type: Node,
    displayOrder: 3,
    displayName: '下个点',
    visible: function (this: RoadPoint) {
      return this.type !== RoadPointType.END
    }
  })
  nextStation: Node = null;

  @property({
    displayOrder: 4,
    displayName: '顺时针',
    visible: function (this: RoadPoint) {
      return this.type !== RoadPointType.END && this.moveType === MoveType.CURVE
    }
  })
  clockwise = true;

  @property({
    visible: function (this: RoadPoint) {
      return this.type === RoadPointType.GREETING || this.type === RoadPointType.GOODBYE
    }
  })
  direction = new Vec3(1,0,0);

  @property({
    visible: function (this: RoadPoint) {
      return this.type === RoadPointType.AI_START
    }
  })
  interval = 3;

  @property({
    visible: function (this: RoadPoint) {
      return this.type === RoadPointType.AI_START
    }
  })
  delayTime = 0;

  @property({
    visible: function (this: RoadPoint) {
      return this.type === RoadPointType.AI_START
    }
  })
  speed = 0.05;

  @property({
    visible: function (this: RoadPoint) {
      return this.type === RoadPointType.AI_START
    }
  })
  car = '201';

}

