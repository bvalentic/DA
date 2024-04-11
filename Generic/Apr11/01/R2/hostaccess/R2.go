package hostaccess

import (
	"context"
	"fmt"

	"github.com/gorilla/websocket"
	"github.com/rancher/go-rancher/client"
)

type RancherWebsocketClient client.RancherClient

func (c *RancherWebsocketClient) GetHostAccess(resource client.Resource, action string, input interface{}) (*websocket.Conn, error) {
	var resp client.HostAccess
	url := resource.Actions[action]
	if url == "" {
		return nil, fmt.Errorf("Failed to find action: %s", action)
	}

	err := c.Post(context.Background(), url, input, &resp)
	if err != nil {
		return nil, err
	}

	url = fmt.Sprintf("%s?token=%s&v=2-beta", resp.Url, resp.Token)

	conn, _, err := c.Websocket(context.Background(), url, nil)

	return conn, err
}
