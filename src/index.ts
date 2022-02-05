/** Allows you to create template tags that signal to extensions that a following template string should be syntax highlighted without messing with the content. */
export const createTag = () => (strings: TemplateStringsArray, ...subs: any[]) => {
    let result = ""
    for (let i = 0; i < strings.length; i++) {
        result += strings[i]
        if (subs[i])
            result += `${subs[i]}`
    }

    return result
}

export const javascript = createTag(),
    js = createTag(),
    jsx = createTag(),
    typescript = createTag(),
    ts = createTag(),
    tsx = createTag(),
    html = createTag(),
    css = createTag(),
    scss = createTag(),
    md = createTag(),
    markdown = createTag(),
    graphql = createTag(),
    gql = createTag(),
    glsl = createTag(),
    json = createTag(),
    yaml = createTag()
