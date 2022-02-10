import * as templateTags from "."

const exampleTag = templateTags.createTag()

test("creating a template tag", () => {
    expect(typeof exampleTag).toBe("function")
})

test("using a template tag with no substitutions", () => {
    expect(exampleTag`foo`).toBe("foo")
})

test("using a template tag with one substitution", () => {
    expect(exampleTag`foo ${1}`).toBe("foo 1")
})

test("using a template tag with multiple substitutions", () => {
    expect(exampleTag`foo ${1} bar ${2}`).toBe("foo 1 bar 2")
})

test("predefined tags are functions", () => {
    expect(typeof templateTags.javascript).toBe("function")
    expect(typeof templateTags.js).toBe("function")
    expect(typeof templateTags.jsx).toBe("function")
    expect(typeof templateTags.typescript).toBe("function")
    expect(typeof templateTags.ts).toBe("function")
    expect(typeof templateTags.tsx).toBe("function")
    expect(typeof templateTags.html).toBe("function")
    expect(typeof templateTags.css).toBe("function")
    expect(typeof templateTags.scss).toBe("function")
    expect(typeof templateTags.md).toBe("function")
    expect(typeof templateTags.markdown).toBe("function")
    expect(typeof templateTags.graphql).toBe("function")
    expect(typeof templateTags.gql).toBe("function")
    expect(typeof templateTags.glsl).toBe("function")
    expect(typeof templateTags.json).toBe("function")
    expect(typeof templateTags.yaml).toBe("function")
})