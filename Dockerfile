FROM node:18-alpine
FROM nginx:alpine

# 安装项目依赖
RUN yarn install

# 构建 Gatsby 项目
RUN yarn build

# 删除默认的 nginx 配置文件
# RUN rm -rf /etc/nginx/conf.d/*

# 将 Gatsby 项目的构建文件复制到 nginx 的默认静态文件目录
# COPY public/ /usr/share/nginx/html

# 暴露 nginx 默认端口
# EXPOSE 80

# 定义容器启动命令
# CMD ["nginx", "-g", "daemon off;"]
