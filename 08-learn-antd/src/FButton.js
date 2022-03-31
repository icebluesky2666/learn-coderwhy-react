import React, { PureComponent } from 'react'
import { Button, Space, DatePicker } from 'antd'
import { PoweroffOutlined } from '@ant-design/icons'

const Status = (React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <DatePicker status="error" style={{ width: '100%' }} />
    <DatePicker status="warning" style={{ width: '100%' }} />
    <DatePicker.RangePicker status="error" style={{ width: '100%' }} />
    <DatePicker.RangePicker status="warning" style={{ width: '100%' }} />
  </Space>
))

export default class FButton extends PureComponent {
  state = {
    loadings: []
  }

  enterLoading = (index) => {
    this.setState(({ loadings }) => {
      const newLoadings = [...loadings]
      newLoadings[index] = true

      return {
        loadings: newLoadings
      }
    })
    setTimeout(() => {
      this.setState(({ loadings }) => {
        const newLoadings = [...loadings]
        newLoadings[index] = false

        return {
          loadings: newLoadings
        }
      })
    }, 6000)
  }

  render() {
    const { loadings } = this.state
    return (
      <>
        <Status />
        <Space style={{ width: '100%' }}>
          <Button type="primary" loading>
            Loading
          </Button>
          <Button type="primary" size="small" loading>
            Loading
          </Button>
          <Button type="primary" icon={<PoweroffOutlined />} loading />
        </Space>

        <Space style={{ width: '100%' }}>
          <Button type="primary" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
            Click me!
          </Button>
          <Button type="primary" icon={<PoweroffOutlined />} loading={loadings[1]} onClick={() => this.enterLoading(1)}>
            Click me!
          </Button>
          <Button
            type="primary"
            icon={<PoweroffOutlined />}
            loading={loadings[2]}
            onClick={() => this.enterLoading(2)}
          />
        </Space>
      </>
    )
  }
}
