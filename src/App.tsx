// import './App.css'
import Section from '../dist/index.js'

const {SectionHeader, SectionContent} = Section

function App() {


  return (
    <div className="App">
      <SectionHeader>
        标题1： HTML section 元素表示 HTML 文档中一个通用独立章节，它没有更具体的语义元素来表示。一般来说会包含一个标题。
      </SectionHeader>
      <SectionContent>
        使用 section 元素但不包含标题的情况，通常出现在 web 应用或用户界面的部分，而不是传统的文档结构中。在文档中，有独立的内容部分但没有标题来描述其内容，是没有任何意义的。标题对所有的读者都很有用，尤其是对使用屏幕阅读器等辅助技术的用户，同时标题也有利于搜索引擎优化。

在设置二级导航时，全局导航已经被包裹在 nav 元素中，此时可以使用 section 元素包裹一个上一个/下一个菜单作为二级导航。
      </SectionContent>
    </div>
  )
}

export default App
