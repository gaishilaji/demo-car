import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

interface IEventData {
    handler: Function;
    target: any;
}

interface IEvent {
    [eventName: string]: IEventData[];
}
@ccclass('CustomEventListener')
export class CustomEventListener extends Component {
    public static store: IEvent = {}

    public static on(eventName: string, handler: Function, target?: any): boolean {
        if (!this.store) this.store[eventName] = []
        // 如果已经存在该处理函数则返回失败
        if (this.store[eventName].some(data => {
            if (data.handler === handler) return true
        })) return false
        this.store[eventName].push({
            handler,
            target
        })
        return true
    }

    public static off(eventName: string, handler: Function, target?: any) {
        const events = this.store[eventName]
        if (!events || events.length === 0) return false
        return events.some((event, ind) => {
            if (event.handler === handler && (!target || target === event.target)) {
                events.splice(ind, 1)
                return true
            }
        })
    }

    public static dispatchEvent(eventName: string, ...args: any) {
        const events = this.store[eventName]
        if (!events || events.length === 0) return false
        events.forEach(event => {
            event.handler.apply(event.target, args)
        })
        return true
    }
}

