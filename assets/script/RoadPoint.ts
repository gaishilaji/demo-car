import {_decorator, Component, Node, Vec3} from 'cc';

const {ccclass, property} = _decorator;


enum RoadPointType {
  NORMAL,
  START,
  GREETING,
  GOODBYE,
  END,
  AI_START
}

enum MoveType {
  LINE,
  CURVE
}

@ccclass('RoadPoint')
export class roadPoint extends Component {
  @property({
    type: RoadPointType
  })
  type = RoadPointType.NORMAL

  @property({
    type: MoveType
  })
  moveType = MoveType.LINE;

  @property({
    type: Node
  })
  nextStation: Node = null;

  @property
  clockwise = true;

  @property({
    type: Vec3
  })
  direction = new Vec3(1,0,0);

  @property
  interval = 3;

  @property
  delayTime = 0;

  @property
  speed = 0.05;

  @property
  car = '201';

}

