function solution(logs) {

    const DO_NOT_PRINT = [`Change`]
    const opStrings = {
        Enter : '님이 들어왔습니다.',
        Leave : `님이 나갔습니다.`,
    }

    const userNicks = getUserNicks(logs)
    return getPrintInfo ({logs, userNicks, DO_NOT_PRINT, opStrings})
}

function getUserNicks (logs) {
    const userNicks = {}
    logs.map(log=> {
        const [op, userid, userNick] = log.split(' ')
        if(userNick) userNicks[userid]  = userNick
    })
    return userNicks
}

function getPrintInfo ({logs, userNicks, DO_NOT_PRINT, opStrings}) {
    return logs.map(log => {
        const [op, userid, _] = log.split(' ')
        if(DO_NOT_PRINT.includes(op)) return ;
        else return userNicks[userid].concat(opStrings[op])
    }).filter(v=> v != null)
}


solution(["Enter uid1234 Muzi",
"Enter uid4567 Prodo",
"Leave uid1234",
"Enter uid1234 Prodo",
"Change uid4567 Ryan"]	)