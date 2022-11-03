

function compose (...args)
{
    args = args.reverse()
    return function (...args2)
    {
        i = 0
        res = args[0](...args2)
        for (i = 1; i < args.length; i++)
        {
            res = args[i](res)
        }
        return res
    }

}

