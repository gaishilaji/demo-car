import { _decorator, Component, Node } from 'cc';
import {CarManager} from 'db://assets/script/CarManager'
import {GameMap} from 'db://assets/script/GameMap'
const { ccclass, property } = _decorator;

@ccclass('MapManager')
export class MapManager extends Component {
  public curPath: Node[] = []
  public resetMap() {
    const curMap = this.node.children[0].getComponent(GameMap)
    this.curPath = curMap.paths
  }
}

